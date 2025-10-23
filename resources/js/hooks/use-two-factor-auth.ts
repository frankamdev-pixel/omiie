import { useCallback, useMemo, useState } from 'react'

/**
 * Interface des données renvoyées par la route du QR Code
 */
interface TwoFactorSetupData {
  svg: string
  url: string
}

/**
 * Interface des données renvoyées par la route de la clé secrète
 */
interface TwoFactorSecretKey {
  secretKey: string
}

export const OTP_MAX_LENGTH = 6

/**
 * Fonction utilitaire pour effectuer des requêtes fetch et renvoyer du JSON
 */
const fetchJson = async <T>(url: string): Promise<T> => {
  const response = await fetch(url, {
    headers: { Accept: 'application/json' },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`)
  }

  return response.json()
}

/**
 * Hook personnalisé pour gérer la double authentification (2FA)
 */
export const useTwoFactorAuth = () => {
  const [qrCodeSvg, setQrCodeSvg] = useState<string | null>(null)
  const [manualSetupKey, setManualSetupKey] = useState<string | null>(null)
  const [recoveryCodesList, setRecoveryCodesList] = useState<string[]>([])
  const [errors, setErrors] = useState<string[]>([])

  // Vérifie si les données de configuration sont prêtes
  const hasSetupData = useMemo<boolean>(
    () => qrCodeSvg !== null && manualSetupKey !== null,
    [qrCodeSvg, manualSetupKey]
  )

  /**
   * Récupère le QR code depuis le backend
   */
  const fetchQrCode = useCallback(async (): Promise<void> => {
    try {
      const { svg } = await fetchJson<TwoFactorSetupData>('/user/two-factor-qr-code')
      setQrCodeSvg(svg)
    } catch {
      setErrors((prev) => [...prev, 'Failed to fetch QR code'])
      setQrCodeSvg(null)
    }
  }, [])

  /**
   * Récupère la clé secrète pour la configuration manuelle
   */
  const fetchSetupKey = useCallback(async (): Promise<void> => {
    try {
      const { secretKey: key } = await fetchJson<TwoFactorSecretKey>('/user/two-factor-secret-key')
      setManualSetupKey(key)
    } catch {
      setErrors((prev) => [...prev, 'Failed to fetch a setup key'])
      setManualSetupKey(null)
    }
  }, [])

  /**
   * Efface la liste des erreurs
   */
  const clearErrors = useCallback((): void => {
    setErrors([])
  }, [])

  /**
   * Réinitialise les données de configuration
   */
  const clearSetupData = useCallback((): void => {
    setManualSetupKey(null)
    setQrCodeSvg(null)
    clearErrors()
  }, [clearErrors])

  /**
   * Récupère les codes de récupération
   */
  const fetchRecoveryCodes = useCallback(async (): Promise<void> => {
    try {
      clearErrors()
      const codes = await fetchJson<string[]>('/user/two-factor-recovery-codes')
      setRecoveryCodesList(codes)
    } catch {
      setErrors((prev) => [...prev, 'Failed to fetch recovery codes'])
      setRecoveryCodesList([])
    }
  }, [clearErrors])

  /**
   * Récupère les données initiales (QR code + clé secrète)
   */
  const fetchSetupData = useCallback(async (): Promise<void> => {
    try {
      clearErrors()
      await Promise.all([fetchQrCode(), fetchSetupKey()])
    } catch {
      setQrCodeSvg(null)
      setManualSetupKey(null)
    }
  }, [clearErrors, fetchQrCode, fetchSetupKey])

  return {
    qrCodeSvg,
    manualSetupKey,
    recoveryCodesList,
    hasSetupData,
    errors,
    clearErrors,
    clearSetupData,
    fetchQrCode,
    fetchSetupKey,
    fetchSetupData,
    fetchRecoveryCodes,
  }
}
