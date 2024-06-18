import React, { createContext, ReactNode, useContext } from 'react'

interface ProfileContextProps {
  profile: Profile
}

const ProfileContext = createContext<ProfileContextProps | undefined>(undefined)

const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ProfileContext.Provider
      value={{
        profile: {
          username: 'skelbraz',
        },
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

const useProfile = () => {
  const context = useContext(ProfileContext)
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfilesProvider')
  }
  return context
}

export { ProfileProvider, useProfile }
